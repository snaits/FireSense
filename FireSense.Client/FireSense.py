import requests
import simplejson as sjon
import datetime
import sys, getopt
from w1thermsensor import W1ThermSensor

def senseTemperature():
    sensor = W1ThermSensor()
    temperature_in_celsius = sensor.get_temperature()
    return temperature_in_celsius

def postToUrl(temp):
    data = sjon.dumps({'celsius' : temp, timestamp: str(datetime.datetime.now())})
    requests.post(url + "/FireSense/", data=data)
    return


def main(argv):
    fireBaseUrl = ''    
    try:
        opts, args = getopt.getopt(argv,"hu:o:",["fireBaseUrl="])
    except getopt.GetoptError:
        print 'FireSense.py -url <fireBaseUrl>'
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print 'FireSense.py -url <fireBaseUrl>'
            sys.exit()
        elif opt in ("-u", "--fireBaseUrl"):
            print 'found url in argv'
            fireBaseUrl = arg
    print 'Input file is ', fireBaseUrl
    temperature_in_celsius = senseTemperature()
    postToUrl(temp)
    #return

if __name__ == "__main__":
   main(sys.argv[1:])

